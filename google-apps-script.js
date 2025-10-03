// Google Apps Script para capturar dados do formulário
// Cole este código no Google Apps Script (script.google.com)

function doPost(e) {
  try {
    // ID da sua planilha do Google Sheets
    const SHEET_ID = 'SEU_SHEET_ID_AQUI';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Dados recebidos do formulário
    const data = JSON.parse(e.postData.contents);
    
    // Adicionar dados na planilha
    sheet.appendRow([
      new Date(), // Timestamp
      data.name || '',
      data.email || '',
      data.phone || '',
      data.message || '',
      data.source || 'Website'
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Erro:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função para configurar a planilha (execute uma vez)
function setupSheet() {
  const SHEET_ID = 'SEU_SHEET_ID_AQUI';
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  
  // Cabeçalhos da planilha
  sheet.getRange(1, 1, 1, 6).setValues([
    ['Data/Hora', 'Nome', 'E-mail', 'Telefone', 'Mensagem', 'Origem']
  ]);
  
  // Formatar cabeçalhos
  sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
  sheet.getRange(1, 1, 1, 6).setBackground('#f0f0f0');
  
  console.log('Planilha configurada com sucesso!');
}
