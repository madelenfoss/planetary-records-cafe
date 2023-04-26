export default Structure => {
	const { divider, list, documentTypeListItem } = Structure;

	return list()
		.title('Content')
		.showIcons(false)
		.items([

			documentTypeListItem('menuItem'),
			documentTypeListItem('menuCategory'),
			documentTypeListItem('allergen'),

			divider(),
			
			documentTypeListItem('album'),
			documentTypeListItem('vinylOfTheMonth'),
			documentTypeListItem('vinylCategory'),
			documentTypeListItem('artist'),

			divider(),

			documentTypeListItem('staff'),
			
		])
}