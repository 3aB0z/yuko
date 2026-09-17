import { Link, useForm } from '@inertiajs/react';

export default function Create() {
    const form = useForm({
        name: '',
    });

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        form.post('/admin/categories');
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Create Category</h1>

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
                    Create Category
                </button>
            </form>
        </div>
    );
}
