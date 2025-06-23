import type { User } from "../types/user.type";
import AvatarImg from "@/assets/avatar.jpg";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

interface UserProfileProps {
  user: User | null;
  loading: boolean;
}

export const UserProfile = ({ user, loading }: UserProfileProps) => {
  if (loading) {
    return (
      <Card className="max-w-md mx-auto animate-pulse">
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  if (!user) return null;

  const fields: { key: keyof User; label: string }[] = [
    { key: "email", label: "Email" },
    { key: "phone", label: "Celular" },
    { key: "document_number", label: "Identificación" },
    { key: "role_description", label: "Perfil" },
    { key: "user_type_description", label: "Tipo de usuario" },
    { key: "supplier_description", label: "Organización" },
  ];

  return (
    <Card className="max-w-xl rounded">
      <CardHeader className="flex items-center space-x-4">
        <Avatar className="size-20">
          <AvatarImage src={AvatarImg} alt="User Avatar" />
          <AvatarFallback>{user.names.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg capitalize">{user.names}</CardTitle>
          <p className="text-sm text-muted-foreground capitalize">
            {user.last_names}
          </p>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-4">
        {fields.map(({ key, label }) => (
          <div key={key} className="space-y-1 grid grid-cols-1 sm:grid-cols-2">
            <p className="text-sm font-semibold">{label}</p>
            <p className="text-sm text-muted-foreground">
              {(user[key] as string) ?? "—"}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
