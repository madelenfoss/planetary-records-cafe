export default Structure => {
	const { divider, list, documentTypeListItem } = Structure;

	return list()
		.title('Content')
		.showIcons(false)
		.items([

			documentTypeListItem('album'),
			documentTypeListItem('genre'),
			documentTypeListItem('artist'),

			divider(),

			documentTypeListItem('staff'),
			documentTypeListItem('role')
			
		])
}