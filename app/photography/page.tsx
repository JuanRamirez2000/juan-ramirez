import cloudinary from "cloudinary";
import { ResourceApiResponse } from "cloudinary";
import CldImageWrapper from "../components/CldImageWrapper";

export default async function Page() {
  const { resources: images }: { resources: ResourceApiResponse["resources"] } =
    await cloudinary.v2.api.resources({
      resource_type: "image",
      prefix: "Juan/",
      type: "upload",
      max_results: 25,
    });

  return (
    <section className="w-screen h-fit lg:h-full flex flex-col items-center justify-center lg:overflow-y-hidden">
      <div className="h-fit w-full flex-col flex items-center lg:items-start py-24 lg:py-0 lg:flex-row gap-10 lg:pl-[20rem]">
        {images.map((image) => {
          return (
            <div
              key={image.public_id}
              className="relative w-5/6 lg:w-[40rem] shrink-0 h-96 lg:h-[46rem] shadow-primary shadow-2xl"
            >
              <CldImageWrapper
                src={image.url}
                alt=""
                fill
                className="object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
