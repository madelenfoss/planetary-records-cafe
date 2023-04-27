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
			documentTypeListItem('genre'),
			documentTypeListItem('artist'),

			divider(),

			documentTypeListItem('staff'),
			documentTypeListItem('role')
			
		])
}