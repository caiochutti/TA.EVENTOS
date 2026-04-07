# Guia: Como Adicionar Imagens e Vídeos aos Produtos

## 📋 Visão Geral
Agora seu site tem uma funcionalidade completa de galeria de produtos! Quando os clientes clicam em qualquer produto (Açaí, Churros, Fini, etc), eles são levados a uma página com:
- 🖼️ **Galeria de Imagens** com miniatura clicável
- 🎥 **Vídeos de Demonstração**
- 🔗 **Botão para fazer orçamento**

## 🎯 Como Funciona

1. **Cliente clica** em um cartão de produto na página inicial
2. **Página de detalhes** abre com galeria do produto
3. **Cliente visualiza** imagens e vídeos
4. **Cliente pode fazer** orçamento direto da página

## ➕ Como Adicionar Imagens

1. Salve suas imagens na pasta `assets/img/`
2. Abra o arquivo `src/data/products.js`
3. Encontre o produto que quer editar na variável `products`
4. Adicione o caminho da imagem no array `images`:

```javascript
acai: {
  name: 'Estação de Açaí',
  description: 'Montado na hora com acompanhamentos variados.',
  images: [
    'assets/img/acai.jpeg',
    'assets/img/acai-2.jpeg',
    'assets/img/acai-galeria-1.jpeg',  // ← Adicione aqui
    'assets/img/acai-galeria-2.jpeg',  // ← E aqui
    'assets/img/acai-galeria-3.jpeg'   // ← E aqui
  ],
  videos: []
},
```

## 🎬 Como Adicionar Vídeos

Para adicionar vídeos do YouTube, você precisa do **ID do vídeo**.

### Encontrando o ID do YouTube:
- Acesse o vídeo no YouTube
- Na URL: `https://www.youtube.com/watch?v=**ESTE_É_O_ID**`
- Copie apenas a parte após `v=`

### Adicionando o vídeo:

```javascript
churros: {
  name: 'Churros com Sorvete',
  description: '...',
  images: [...],
  videos: [
    'https://www.youtube.com/embed/ID_DO_VIDEO_1',
    'https://www.youtube.com/embed/ID_DO_VIDEO_2'
  ]
},
```

## 📝 Exemplo Completo

```javascript
fini: {
  name: 'Fini',
  description: 'Nossa estação conta com uma seleção incrível de balas de gelatina, marshmallows e guloseimas variadas.',
  images: [
    'assets/img/fini-3.jpeg',
    'assets/img/fini-galeria-1.jpeg',
    'assets/img/fini-galeria-2.jpeg',
    'assets/img/fini-galeria-3.jpeg'
  ],
  videos: [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/jNQXAC9IVRw'
  ]
}
```

## 📁 Estrutura de Arquivos Criados

```
projeto/
├── product-details.html ← Nova página de detalhes
├── src/
│   ├── data/
│   │   └── products.js ← Dados dos produtos (EDITE AQUI!)
│   ├── modules/
│   │   └── products.js ← Lógica de clique nos cartões
│   └── main.js ← Atualizado com novo módulo
└── ...
```

## ✅ Checklist para Começar

- [ ] Adicione suas imagens em `assets/img/`
- [ ] Atualize `src/data/products.js` com os caminhos das imagens
- [ ] Adicione IDs de vídeos do YouTube (opcional)
- [ ] Teste clicando nos cartões na página inicial
- [ ] Verifique se as imagens aparecem na galeria

## 🔍 Solução de Problemas

**P: As imagens não aparecem**
- ✓ Verifique se o caminho está correto em `products.js`
- ✓ Confirme que o arquivo existe em `assets/img/`
- ✓ Use o caminho relative: `assets/img/nome-da-imagem.jpeg`

**P: O vídeo não aparece**
- ✓ Confirme que é um link de embed do YouTube
- ✓ Formato correto: `https://www.youtube.com/embed/ID`
- ✓ Não use o link normal do YouTube (watch?v=)

**P: As imagens aparecem mas os vídeos não**
- ✓ Vídeos são opcionais - deixe o array vazio `videos: []` se não tiver
- ✓ Se tiver vídeos, certifique-se de usar o formato de embed correto

## 🎨 Personalizações Futuras

Você pode modificar `product-details.html` para:
- Alterar cores e estilos
- Adicionar mais informações do produto
- Integrar carrinho de compras
- Adicionar avaliações/comentários

## 📞 Dúvidas?

Se tiver problema ao adicionar imagens ou vídeos, verifique:
1. O caminho do arquivo está correto?
2. O arquivo existe na pasta `assets/img/`?
3. A syntax do JavaScript está correta (vírgulas, colchetes, etc)?

Boa sorte! 🚀
