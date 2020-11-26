import React from 'react';
import { toast } from 'react-toastify';

const Msg = props => {
  const handleClick = () => {
    props.onAction && props.onAction();
  };

  return (
    <div>
      <div style={{ textAlign: 'left' }}>{props.title}</div>
      <hr />
      {props.onAction && (
        <button style={{ float: 'right' }} onClick={handleClick}>
          {props.actionLabel}
        </button>
      )}
      <div>{props.body}</div>
    </div>
  );
};

function showCommonErrorMsg(config, options) {
  toast.error(<Msg />, {
    // position: toast.POSITION.TOP_CENTER
  });
}

function showCommonSuccessMsg(config, options) {
  toast.success(<Msg {...config} />, {
    // position: toast.POSITION.TOP_CENTER
  });
}

export { showCommonErrorMsg, showCommonSuccessMsg };
