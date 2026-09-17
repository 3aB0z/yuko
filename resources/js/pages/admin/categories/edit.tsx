import { Link, useForm } from '@inertiajs/react';
import type { Category } from '@/types/category';

interface Props {
    category: Category;
}

export default function Edit({ category }: Props) {
    const form = useForm({
        name: category.name,
    });

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        form.put(`/admin/categories/${category.slug}`);
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Edit Category</h1>

                <Link href="/admin/categories">Back</Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
                <div>
                    <label htmlFor="name">Name</label>

                    <input
                        id="name"
                        type="text"
                        value={form.data.name}
                        onChange={(event) =>
                            form.setData('name', event.target.value)
                        }
                        className="mt-1 block w-full rounded border px-3 py-2"
                    />

                    {form.errors.name && (
                        <p className="mt-1 text-sm text-red-600">
                            {form.errors.name}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={form.processing}
                    className="rounded bg-black px-4 py-2 text-white"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
