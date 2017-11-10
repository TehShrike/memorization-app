import Vuex from 'vuex'
import Vue from 'vue'
import workbookAndSheet from './workbook-and-sheet-module.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		currentWorkbookAndSheet: workbookAndSheet()
	}
})
