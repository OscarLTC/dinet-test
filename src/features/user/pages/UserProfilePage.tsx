import { UserProfile } from "../components/UserProfile";
import { useUserProfile } from "../hooks/useUserProfile";

export const UserProfilePage = () => {
  const { data: user, isLoading, isError } = useUserProfile();

  if (isError) return <p>Error cargando datos del usuario.</p>;

  return (
    <div className="p-3 justify-content-start">
      <UserProfile user={user!} loading={isLoading} />
    </div>
  );
};
