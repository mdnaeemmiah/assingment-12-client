import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useRole from "../../../hooks/useRole"
import AdminStatistics from "../Admin/AdminStatistics";
import CreatorStatistics from "../Host/CreatorStatistics";
import UserStatistics from "../User/UserStatistics";



const Statistics = () => {
  const [role,isLoading] =useRole();
  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  return (
    <> 
    {role === 'admin' && <AdminStatistics></AdminStatistics>}
    {role === 'host' && <CreatorStatistics></CreatorStatistics>}
    {role === 'guest' && <UserStatistics></UserStatistics>}
    </>
  )
}

export default Statistics