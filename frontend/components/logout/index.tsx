import { logoutAction } from "@/lib/ssr/logout";
import { LogOut } from "lucide-react";

export function AuthLogoutButton() {
    return (
      <form action={logoutAction}>
        <button
          type="submit"
          className="flex items-center gap-2"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </form>
    );
}
