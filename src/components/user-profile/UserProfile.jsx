import { getUserProfile } from "../../utils/authUtils";

export default function UserProfile() {

    const profile = getUserProfile()

    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-md rounded-xl p-6 border border-gray-200">
            <div className="flex items-center space-x-4 gap-10 ml-5">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold">
                    {profile.username.toUpperCase()}
                </div>
                <div>
                    <p className="text-m text-gray-500">Потребилтеско име: <span className="text-m font-semibold text-gray-800">{profile.username}</span></p>
                    <p className="text-m text-gray-500">Имейл: <span className="text-m font-semibold text-gray-800">{profile.email}</span></p>
                </div>
            </div>
        </div>
    );
}