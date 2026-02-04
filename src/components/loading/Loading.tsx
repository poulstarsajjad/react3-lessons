function Loading() {
  return (
    <div className="flex flex-row justify-center items-center my-15 gap-5">
      <div className="w-5 h-5 rounded-full bg-orange-400 animate-bounce"></div>
      <div className="w-5 h-5 rounded-full bg-orange-400 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-5 h-5 rounded-full bg-orange-400 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

export default Loading;
