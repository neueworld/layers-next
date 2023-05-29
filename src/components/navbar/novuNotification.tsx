import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  IMessage,
  useUpdateAction,
  MessageActionStatusEnum,
  ButtonTypeEnum
} from '@novu/notification-center';
import { useUser } from '@thirdweb-dev/react';
import { useNavigation } from 'react-router-dom';

const NovuHeader = () => {
  const { user, isLoggedIn } = useUser();

  return (
    <NovuProvider
      // @ts-ignore
      subscriberId={user?.data?.userId as string}
      applicationIdentifier={'yELWseDgDcdm'}
    >
      <PopoverWrapper />
    </NovuProvider>
  );
};

function PopoverWrapper() {
  const { updateAction } = useUpdateAction();
  // const navigation = useNavigation();

  function handlerOnNotificationClick(message: IMessage) {
    if (message?.cta?.data?.url) {
      window.location.href = message.cta.data.url;
    }
  }

  async function handlerOnActionClick(
    templateIdentifier: string,
    type: ButtonTypeEnum,
    message: IMessage
  ) {
    // if (templateIdentifier === 'friend-request') {
    //   if (type === 'primary') {
    //     /** Call your API to accept the friend request here **/
    //     navigation
    //     /** And than update novu that this actions has been taken, so the user won't see the button again **/
    //     await updateAction(message._id, type, MessageActionStatusEnum.DONE);
    //   }
    // }
  }

  return (
    <PopoverNotificationCenter
      colorScheme="dark"
      onNotificationClick={handlerOnNotificationClick}
      onActionClick={handlerOnActionClick}
    >
      {({ unseenCount }) => {
        return <NotificationBell unseenCount={unseenCount} />;
      }}
    </PopoverNotificationCenter>
  );
}

export default NovuHeader;

// function novuNotification() {
//   return <div>novuNotification</div>;
// }
// export default novuNotification;
