import ky from "ky";

export class ClientService {
  client;

  constructor(config) {
    this.client = ky.create(config)
  }

  async get(url, options) {
    const res = await this.client.get(url, options)
    return res.json()
  }

  async post(url, data, options) {
    const res = await this.client.post(url, data, options)
    return res.json()
  }
}
