import React from 'react'
import Gallery from 'react-photo-gallery'

export default class GalleryPhotos extends React.Component {
  render() {
    return (
      <>
        <div className='text-center mt-5 mb-5'>
          <h2>Lo más destacado</h2>
        </div>
        <div className='mb-5 pb-5'>
          <Gallery
            photos={PHOTO_SET}
            margin={6}
            columns={3}
            onClick={() => alert('Clicked...')}
          />
        </div>
      </>
    )
  }
}
const PHOTO_SET = [
  {
    key: 'image_1',
    src:
      'https://img.grouponcdn.com/deal/3KZDTp75VYn3mhVMruwgMv2pAYc9/3K-1000x622/v1/sc600x600.jpg',
    width: 7,
    height: 7
  },
  {
    key: 'image_2',
    src:
      'https://s7img.ftdi.com/is/image/ProvideCommerce/PF_19_R032_LAY_SHP_V4?$proflowers-tile-wide-mv-new$',
    width: 6,
    height: 6
  },
  {
    key: 'image_3',
    src: 'https://www.eflorist.co.uk/Products/600x700/PS17BQTSF01S.jpg',
    width: 5,
    height: 6
  },
  {
    key: 'image_4',
    src:
      'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/birth_month_flowers-primary-1920x1280px_pixabay.jpg?itok=zmvl5X7w',
    width: 8,
    height: 5
  },
  {
    key: 'image_5',
    src:
      'https://cdn.shopify.com/s/files/1/0222/9834/products/novase_800x.jpg?v=1526705078',
    width: 6,
    height: 6
  },
  {
    key: 'image_6',
    src: 'https://d1whpkioiz600t.cloudfront.net/Images/product/ph-100-rr.jpg',
    width: 9,
    height: 9
  }
]
