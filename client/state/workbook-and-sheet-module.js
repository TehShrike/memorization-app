/*

verbs:

- load a workbook from google (requires workbook id)
- load a sheet from google (requires workbook and sheet id)

*/

import sheetsy from 'sheetsy'
const { urlToKey, getWorkbook, getSheet } = sheetsy

export default (httpGet) => ({
	state: {
		workbook: null,
		sheet: null
	},
	mutations: {
		setWorkbook(state, workbook) {
			state.workbook = workbook
		},
		setSheet(state, sheet) {
			state.sheet = sheet
		}
	},
	actions: {
		async fetchWorkbook(context, workbookId) {
			const workbook = await getWorkbook(workbookId, httpGet)
			context.commit('setWorkbook', workbook)
		},
		async fetchSheet(context, sheetId) {
			const sheet = await getSheet(sheetId, httpGet)
			context.commit('setSheet', sheet)
		}
	},
	getters: {
		rows: state => state.sheet && state.sheet.rows
	}
})
