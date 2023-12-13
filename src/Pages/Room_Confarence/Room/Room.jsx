import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Room = () => {
    const { user } = useAuth()
    const { roomID } = useParams()
    
    const myMeeting = async (element) => {
        const appID = parseInt(import.meta.env.VITE_appID) 
        const serverSecret = import.meta.env.VITE_serverSecret
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), user?.displayName);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
            turnOnCameraWhenJoining: true,
            showMyCameraToggleButton: true,
            showAudioVideoSettingsButton: true,
            showScreenSharingButton: true ,
            showPreJoinView: false,
            sharedLinks: [{
                url: window.location.origin + window.location.pathname + '?roomId=' + roomID,
            }],
            onUserAvatarSetter:(userList) => {
                userList.forEach(user => {
                    user.setUserAvatar(user?.photoURL)
                })
            }, 
        });
    }

    return (
        <div className="pt-10">
            <div className="h-full" ref={myMeeting}>
                room{roomID}
            </div>
        </div>
    );
};

export default Room;