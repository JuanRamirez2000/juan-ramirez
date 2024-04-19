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
    <section className="w-full h-full overflow-y-hidden flex flex-col items-center justify-center">
      <div className="h-fit max-h-fit w-screen flex flex-row flex-nowrap gap-10 ">
        {images.map((image) => {
          return (
            <div
              key={image.public_id}
              className="relative w-[40rem] shrink-0 h-[46rem]"
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
