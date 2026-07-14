export type Destino = {
  id: string;
  nome: string;
  imagem: string;
  descricao: string;
  localizacao: string;
  destaque: string;
};

export const destinos: Destino[] = [
  {
    id: "rio-de-janeiro",
    nome: "Rio de Janeiro",
    imagem: "/images/rio.jpg",
    localizacao: "Brasil",
    destaque: "Praias, Cristo Redentor e Pão de Açúcar",
    descricao:
      "O Rio de Janeiro encanta com suas praias famosas, paisagens naturais e pontos turísticos conhecidos mundialmente. É um destino perfeito para quem busca natureza, cultura e belas vistas.",
  },
  {
    id: "gramado",
    nome: "Gramado",
    imagem: "/images/gramado.jpg",
    localizacao: "Brasil",
    destaque: "Clima europeu, gastronomia e romantismo",
    descricao:
      "Gramado é um destino charmoso da Serra Gaúcha, conhecido pelo clima frio, arquitetura inspirada na Europa, chocolates artesanais e ótimas opções gastronômicas.",
  },
  {
    id: "paris",
    nome: "Paris",
    imagem: "/images/paris.jpg",
    localizacao: "França",
    destaque: "Torre Eiffel, museus e cafés",
    descricao:
      "Paris é uma das cidades mais visitadas do mundo. A capital francesa reúne arte, história, moda, culinária e monumentos icônicos como a Torre Eiffel e o Museu do Louvre.",
  },
  {
    id: "tokyo",
    nome: "Tokyo",
    imagem: "/images/tokyo.jpg",
    localizacao: "Japão",
    destaque: "Tecnologia, templos e cultura pop",
    descricao:
      "Tokyo mistura tradição e modernidade. A cidade oferece templos históricos, bairros tecnológicos, culinária marcante e uma experiência cultural única.",
  },
];