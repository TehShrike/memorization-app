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
		async fetchWorkbook(context, workbookKey) {
			const workbook = await getWorkbook(workbookKey, httpGet)
			context.commit('setWorkbook', workbook)
		},
		async fetchSheet(context, workbookKey, sheetId) {
			const sheet = await getSheet(workbookKey, sheetId, httpGet)
			context.commit('setSheet', sheet)
		}
	},
	getters: {
		rows: state => state.sheet && state.sheet.rows
	}
})
