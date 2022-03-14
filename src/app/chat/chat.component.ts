import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebSocketService} from "../service/web-socket.service";
import {NgForm} from "@angular/forms";
import {ChatMessageDto} from "../models/chatMessageDto";
import {TokenStorageService} from "../_services/token-storage.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../_/auth.interceptor";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  currentUser: any;
  isLoggedIn=false;
  username:any;

  constructor(public webSocketService: WebSocketService,
              private token: TokenStorageService,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocket();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.token.getUser();
    }
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(this.token.getUser().username,sendForm.value.message);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  }

}
