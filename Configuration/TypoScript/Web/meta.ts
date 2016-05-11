page.meta {
	# OpenGraph Tags
	og:title {
		attribute = property
		field = title
	}
	og:site_name {
		attribute = property
		data = TSFE:tmpl|setup|sitetitle
	}
	og:description = {$page.meta.description}
	og:description {
		attribute = property
		field = description
	}
	og:image {
		attribute = property
		stdWrap.cObject = FILES
		stdWrap.cObject {
			references {
				data = levelfield:-1, media, slide
			}
			maxItems = 1
			renderObj = COA
			renderObj {
				10 = IMG_RESOURCE
				10 {
					file {
						import.data = file:current:uid
						treatIdAsReference = 1
						width = 1280c
						height = 720c
					}
					stdWrap {
						typolink {
							parameter.data = TSFE:lastImgResourceInfo|3
							returnLast = url
							forceAbsoluteUrl = 1
						}
					}
				}
			}
		}
	}
}