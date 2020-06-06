
export interface RespuestaPosts {
  ok: boolean;
  pagina: number;
  posts: Post[];
}
export interface RespuestaPost {
  ok: boolean;
  post: Post;
}

export interface Post {
  imgs?: string[];
  _id?: string;
  mensaje?: string;
  coords?: string;
  usuario?: Usuario;
  created?: string;
  usuarios?: string[];
}

export interface Usuario {
  avatar?: string;
  _id?: string;
  nombre?: string;
  email?: string;
  password?: string;
}

export interface RespuestaAñadirUsuarioPost {
  ok: boolean;
  post: Post;
}
