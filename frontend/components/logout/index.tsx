import { logoutAction } from "@/lib/ssr/logout";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export function AuthLogoutButton() {
    return (
      <form action={logoutAction}>
        <Button type="submit" className="w-full rounded-2xl bg-sparkli-pink hover:bg-sparkli-pink/90 text-white font-semibold">
          <LogOut /> Гарах
        </Button>
      </form>
    );
}
