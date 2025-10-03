# Configuração do Formulário de Captura

## Passo a Passo para Configurar a Integração com Google Sheets

### 1. Criar uma Planilha no Google Sheets
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Copie o ID da planilha da URL (ex: `1ABC123...`)

### 2. Configurar Google Apps Script
1. Acesse [Google Apps Script](https://script.google.com)
2. Crie um novo projeto
3. Cole o código do arquivo `google-apps-script.js`
4. Substitua `SEU_SHEET_ID_AQUI` pelo ID da sua planilha
5. Execute a função `setupSheet()` uma vez para configurar os cabeçalhos
6. Implante como aplicativo web:
   - Clique em "Implantar" > "Nova implantação"
   - Escolha "Tipo: Aplicativo Web"
   - Execute como: "Eu"
   - Quem tem acesso: "Qualquer pessoa"
   - Copie a URL gerada

### 3. Configurar o Formulário
1. Abra o arquivo `src/components/LeadCaptureForm.tsx`
2. Substitua `SEU_SCRIPT_URL` pela URL do seu Google Apps Script
3. Salve o arquivo

### 4. Testar
1. Execute o projeto
2. Preencha o formulário
3. Verifique se os dados aparecem na planilha

## Estrutura dos Dados na Planilha

| Coluna | Descrição |
|--------|-----------|
| A | Data/Hora do envio |
| B | Nome completo |
| C | E-mail |
| D | Telefone/WhatsApp |
| E | Mensagem |
| F | Origem (sempre "Bellys Website") |

## Personalização

### Campos Obrigatórios
- Nome Completo
- E-mail

### Campos Opcionais
- Telefone/WhatsApp
- Mensagem

### Temas
- **Tema Escuro**: Cores roxas da marca
- **Tema Claro**: Cores douradas elegantes

## Segurança

- O Google Apps Script permite apenas requisições POST
- Validação de dados no servidor
- Logs de erro para debugging
