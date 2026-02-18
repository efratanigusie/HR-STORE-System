import Modal from "@/components/ui/Modal";

export default function DeleteEmployee({ isOpen, onClose, onConfirm }) {
  return (
    <Modal title="Delete Employee" isOpen={isOpen} onClose={onClose}>
      <p className="text-sm text-gray-600 mb-4">
        Are you sure you want to delete this employee?  
        This action cannot be undone.
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
