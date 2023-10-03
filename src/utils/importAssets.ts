const importAssets = async (file: string, path: string) => {
	if (typeof file !== 'string') {
		const { default: image } = await import('../assets/default.svg')
		return image
	}

	const [fileName, extension] = file.split('.')
	const { default: assets } = await import(`../assets/${path}/${fileName}.${extension}`)

	return assets
}

export default importAssets
