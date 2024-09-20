import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vb-gepy-backend-web.onrender.com/",
});

export class BaseService {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  buscaPorId(id: number) {
    return axiosInstance.get(this.url + "/" + id);
  }

  listarTodos() {
    return axiosInstance.get(this.url);
  }

  inserir(objeto: any) {
    return axiosInstance.post(this.url, objeto);
  }

  alterar(objeto: any) {
    return axiosInstance.put(this.url, objeto);
  }

  excluir(id: number) {
    return axiosInstance.delete(this.url + "/" + id);
  }
}