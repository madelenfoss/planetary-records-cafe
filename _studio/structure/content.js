export default Structure => {
	const { divider, list, documentTypeListItem } = Structure;

	return list()
		.title('Content')
		.showIcons(false)
		.items([

			documentTypeListItem('menuItem'),
			documentTypeListItem('menu'),
			documentTypeListItem('allergen'),

			divider(),
			
			documentTypeListItem('shopItem'),
			documentTypeListItem('album'),
			documentTypeListItem('vinylOfTheMonth'),
			documentTypeListItem('vinylCategory'),
			documentTypeListItem('artist'),

			divider(),

			documentTypeListItem('staff'),
			
		])
}