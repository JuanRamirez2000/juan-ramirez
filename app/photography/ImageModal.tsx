"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CldImageWrapper from "../components/CldImageWrapper";
import { ResourceApiResponse } from "cloudinary";
import {
  ArrowTopRightOnSquareIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export default function ImageModal({
  image,
}: {
  image: ResourceApiResponse["resources"][0];
}) {
  const [openImageModal, setOpenImageModal] = useState<boolean>(false);

  function openModal() {
    setOpenImageModal(true);
  }
  function closeModal() {
    setOpenImageModal(false);
  }

  return (
    <>
      <button onClick={openModal}>
        <ArrowTopRightOnSquareIcon className="absolute size-8 lg:size-10 z-10 text-neutral bg-base-100 rounded-md p-2 top-2 right-2 cursor-pointer hover:scale-110 duration-150" />
      </button>
      <Transition appear show={openImageModal} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto h-fit">
            <div className="flex min-h-full items-center justify-center p-4 text-center h-fit">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all h-[38rem] lg:h-[64rem] relative">
                  <button onClick={closeModal}>
                    <XCircleIcon className="absolute size-8 lg:size-10 z-10 bg-error rounded-md p-1 top-2 right-2 cursor-pointer hover:scale-110 duration-150 text-error-content" />
                  </button>
                  <CldImageWrapper
                    src={image.url}
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover rounded-md "
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
