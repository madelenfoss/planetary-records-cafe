export default Structure => {
	const { divider, list, documentTypeListItem } = Structure;

	return list()
		.title('Menu')
		.showIcons(false)
		.items([
			documentTypeListItem('menu'),
			
		])
}
