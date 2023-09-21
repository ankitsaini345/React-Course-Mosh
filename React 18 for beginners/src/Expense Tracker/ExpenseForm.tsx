import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const category = ["cat 1", "cat 2", "cat 3"] as const;

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number({ invalid_type_error: "Amount is Required" }).min(1),
  category: z.enum(category, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type expenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: expenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<expenseFormData>({ resolver: zodResolver(schema) });

  return (
    <div className="mb-3">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="desc"
            type="text"
            className="form-control"
          />
        </div>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
        </div>
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            <option value="cat 1">cat 1</option>
            <option value="cat 2">cat 2</option>
            <option value="cat 3">cat 3</option>
          </select>
        </div>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
