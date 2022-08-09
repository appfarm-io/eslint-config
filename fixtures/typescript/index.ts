import noop from './noop'

type ID = string | number

class Person {
	ident: ID
	name: string

	constructor(ident: ID, name: string) {
		this.ident = ident
		this.name = name
	}
}

export default (ident: ID, name: string): Person => {
	const e_Enum = { ONE: 1, TWO: 2 }
	const $af_operand = 'AND'
	const af_prop = 'value'
	const p_resolvable = new Promise(noop)
	const object_id = 0xFFEE

	noop(e_Enum, $af_operand, af_prop, p_resolvable, object_id, {
		'x-frame-options': 'DENY',
	})

	const person = new Person(ident, name)
	return person
}
