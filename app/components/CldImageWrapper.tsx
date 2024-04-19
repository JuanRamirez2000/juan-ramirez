"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

export default function CldImageWrapper(props: CldImageProps) {
  return <CldImage {...props} />;
}
