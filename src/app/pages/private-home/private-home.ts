import { httpResource } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { URL } from '../../api';
import { Profile } from '../../models/profile';

@Component({
  imports: [],
  selector: 'app-private-home',
  styleUrl: './private-home.css',
  templateUrl: './private-home.html',
})
export class PrivateHome {
  key = input.required<string>();
  profile = httpResource<Profile>(() => ({
    url: URL + "profile",
    headers: { "X-Access-Key": this.key() },
  }));
}
