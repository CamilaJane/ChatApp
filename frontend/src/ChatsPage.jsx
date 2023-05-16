import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic(
        '72382e41-838e-41fe-a2b7-54ffaa33a81f', 
        props.user.username, 
        props.user.secret
    );
    return (
    
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    )
}

export default ChatsPage