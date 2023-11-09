function formatMessage(message, maxLength) {

    if (message.length <= maxLength) {
        return message;
    } else {
    const truncatedMessage = message.slice(0, maxLength - 3) + "...";
    return truncatedMessage; 
  }

    }


