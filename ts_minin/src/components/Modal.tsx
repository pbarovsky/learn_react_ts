interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div className="fixed bg-white/30 top-0 right-0 left-0 bottom-0" onClick={onClose}/>
      <div className="text-black w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
};
