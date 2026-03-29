"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-0.5 bg-neutral-100 rounded-lg p-0.5">
      <button
        onClick={() => switchLocale("de")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-md transition-all",
          locale === "de"
            ? "bg-white text-neutral-900 shadow-sm"
            : "text-neutral-500 hover:text-neutral-700"
        )}
      >
        DE
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "px-2.5 py-1 text-xs font-medium rounded-md transition-all",
          locale === "en"
            ? "bg-white text-neutral-900 shadow-sm"
            : "text-neutral-500 hover:text-neutral-700"
        )}
      >
        EN
      </button>
    </div>
  );
}
