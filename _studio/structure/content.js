export default Structure => {
	const { divider, list, documentTypeListItem } = Structure;

	return list()
		.title('Content')
		.showIcons(false)
		.items([
			documentTypeListItem('menuItem'),
			documentTypeListItem('menu'),
			documentTypeListItem('allergens'),

			divider(),
			
			documentTypeListItem('shopItem'),
			documentTypeListItem('vinylOfTheMonth'),
			documentTypeListItem('vinylCategory'),

			divider(),
			
		])
}