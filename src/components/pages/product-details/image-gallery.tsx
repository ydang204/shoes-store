import React, { Component } from "react";
import ImageGallery, {
  ReactImageGalleryProps,
  ReactImageGalleryItem
} from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { ProductDetailsImage } from "../../../_models/product-api/res-model/product-details-res-model";

interface Props {
  productImages: ProductDetailsImage[];
}

class ProductImageGallery extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const properties: ReactImageGalleryProps = {
      thumbnailPosition: "left",
      useBrowserFullscreen: false,
      showFullscreenButton: false,
      showPlayButton: false,
      items: this.props.productImages.map(i => {
        let image: ReactImageGalleryItem = {
          original: i.imageUrl,
          thumbnail: i.imageUrl
        };
        return image;
      })
    };

    return <ImageGallery {...properties} />;
  }
}

export default ProductImageGallery;
