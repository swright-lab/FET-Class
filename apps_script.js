// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE APPS SCRIPT BACKEND
// Paste this entire file into a new Google Apps Script project
// (script.google.com → New project → replace Code.gs with this)
// Then: Deploy → New deployment → Web app → Anyone with Google account
// Copy the deployment URL and paste it into BACKEND_URL in student.html
// ─────────────────────────────────────────────────────────────────────────────

const SHEET_NAME = "Responses";
const SETTINGS_SHEET = "Settings";

function doGet(e) {
  const action = e.parameter.action;
  if (action === "getLesson") return getLesson(e);
  if (action === "getResponses") return getResponses(e);
  if (action === "getSettings") return getSettings(e);
  return jsonResponse({ error: "Unknown action" });
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.action === "submitResponse") return submitResponse(data);
  if (data.action === "updateSettings") return updateSettings(data);
  return jsonResponse({ error: "Unknown action" });
}

function submitResponse(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp","Email","Name","LessonID","LessonTitle","SlideIndex","SlideType","SlideTitle","ResponseType","Response","Unit","Week","Day"]);
    sheet.setFrozenRows(1);
    sheet.getRange(1,1,1,13).setFontWeight("bold").setBackground("#1E2D5E").setFontColor("#FFFFFF");
  }
  sheet.appendRow([
    new Date(),
    data.email || "",
    data.name || "",
    data.lessonId || "",
    data.lessonTitle || "",
    data.slideIndex || 0,
    data.slideType || "",
    data.slideTitle || "",
    data.responseType || "",
    data.response || "",
    data.unit || "",
    data.week || "",
    data.day || ""
  ]);
  return jsonResponse({ success: true });
}

function getResponses(e) {
  const lessonId = e.parameter.lessonId;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) return jsonResponse({ responses: [] });
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  const lessonIdCol = headers.indexOf("LessonID");
  const rows = data.slice(1)
    .filter(r => r[lessonIdCol] === lessonId)
    .map(r => {
      const obj = {};
      headers.forEach((h,i) => obj[h] = r[i]);
      return obj;
    });
  return jsonResponse({ responses: rows });
}

function getSettings(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SETTINGS_SHEET);
  if (!sheet) return jsonResponse({ activeLessonId: null, overrideDate: null });
  const data = sheet.getDataRange().getValues();
  const settings = {};
  data.forEach(row => { if(row[0]) settings[row[0]] = row[1]; });
  return jsonResponse(settings);
}

function updateSettings(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SETTINGS_SHEET);
  if (!sheet) sheet = ss.insertSheet(SETTINGS_SHEET);
  const existing = sheet.getDataRange().getValues();
  const keyCol = existing.map(r=>r[0]);
  Object.entries(data.settings).forEach(([key, val]) => {
    const row = keyCol.indexOf(key);
    if (row >= 0) sheet.getRange(row+1, 2).setValue(val);
    else sheet.appendRow([key, val]);
  });
  return jsonResponse({ success: true });
}

function getLesson(e) {
  return jsonResponse({ status: "ok" });
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
