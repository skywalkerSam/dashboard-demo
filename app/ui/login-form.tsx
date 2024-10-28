"use client";

import { authenticate } from "@/app/lib/actions";
import { ubuntu } from "@/app/ui/fonts";
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { useActionState } from "react";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className="space-y-3 bg-transparent">
      <div className="flex-1 rounded-lg bg-transparent px-6 pb-4 pt-8 border border-r-2 border-black">
        <h1 className={`${ubuntu.className} mb-3 text-2xl`}>
          Please log in to continue...
        </h1>
        <div className="w-full bg-transparent">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-black"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-black border-r-2 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-500 bg-gray-900"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-500" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-black"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-black py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-500 bg-gray-900"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-500" />
            </div>
          </div>
        </div>
        <Button
          className="mt-4 w-auto bg-transparent border border-black border-r-2 text-black"
          aria-disabled={isPending}
        >
          <ArrowRightIcon className="ml-auto h-9 w-9 text-black hover:text-gray-500" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
