# Vertex Getúlio Prime

Atue como um UI/UX Designer e Desenvolvedor Front-end especialista em alta conversão no mercado imobiliário. Vou fornecer o código atual de uma landing page (vertex-getulio-lp.html). O design atual é limpo e focado, mas precisamos ajustar a copy, destacar facilidades de pagamento e adicionar campos de qualificação no formulário para gerar urgência e filtrar leads quentes para um pré-lançamento exclusivo.

Por favor, atualize o código fornecido aplicando EXATAMENTE as seguintes mudanças de texto e interface, mantendo a estética minimalista, a responsividade mobile e a paleta de cores original:

1. Cabeçalho (Header e Marca):

Substitua o texto da marca (as divs .brand-name e .brand-sub) pela imagem da logo fornecida ("LOGO 2_2.png").

Mantenha o fundo do cabeçalho claro para dar contraste à logo escura. Ajuste o CSS para que a logo tenha um tamanho elegante (ex: max-width: 160px).

Mantenha a tag .badge ("PRÉ-LANÇAMENTO") perfeitamente alinhada com a logo.

2. Hero Section e Arte de Fundo:

Utilize a imagem fornecida ("ChatGPT Image 10 de set. de 2026, 22_48_17.png") como background da seção .hero.

Aplique um linear-gradient escuro (overlay) sobre essa imagem de fundo para garantir que os textos brancos ou claros que ficarão por cima tenham leitura perfeita, sem brigar com a imagem do prédio.

Headline (<h1>): Altere para: "A inteligência de investir, o privilégio de morar a 170m da Getúlio Vargas."

Subheadline (<p>): Altere para: "Antecipe-se ao pré-lançamento. Empreendimento já avaliado pela Caixa em R$ 255.000, com unidades disponíveis por valor inferior na abertura de vendas. Entrada facilitada com parcelamento no boleto. Envie sua documentação e garanta prioridade."

3. Seção de Financiamento (Gatilhos de Valorização e Facilidade):

Adicione um novo item no topo da lista .fin-row (sendo o número 01 e renumerando os demais para 02, 03 e 04).

Texto do novo item 01: "Ganho de Patrimônio Imediato — Com avaliação oficial da Caixa a R$ 255.000 e valor de venda inferior, você assina o contrato com o seu patrimônio já valorizado na largada."

Item sobre o Boleto (agora item 03): O texto deve ser: "Entrada parcelada no boleto, direto com a construtora e sem burocracia."

4. Otimização do Formulário de Captura:

Texto de Apoio (.form-sub): "Apenas clientes com documentação em análise terão acesso à reserva de unidades. Preencha seus dados para iniciar a aprovação."

Campo "VOCÊ É" (id="perfil"): Transforme em um menu suspenso (<select>). Opções: Selecione seu objetivo... (Disabled), Quero para Morar, Quero para Investir.

NOVO CAMPO "VALOR PARA ENTRADA" (id="entrada"): Adicione um novo campo <select>. Opções: Selecione uma opção... (Disabled), Sim, possuo valor em reserva, Vou utilizar apenas o FGTS, Possuo valor em reserva + FGTS, Não possuo valor no momento.

Botão CTA (.submit-btn): Altere para: "QUERO ANTECIPAR MINHA APROVAÇÃO"

5. Script de Redirecionamento (WhatsApp):

Atualize a lógica do JavaScript para capturar os dois novos dropdowns (perfil e entrada) e formatar a variável msg exatamente assim: "Olá! Vi que o Vertex Getúlio tem avaliação da Caixa de R$ 255 mil e quero enviar minha documentação para garantir as condições de pré-lançamento. Meu perfil é [Valor do Perfil] e sobre a entrada: [Valor da Entrada]."

Abaixo está o código atual:

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a41b2dde-efc2-4e5b-a9ab-b0f8aff98b50).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
