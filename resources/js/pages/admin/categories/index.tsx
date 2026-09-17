import { Link, router } from '@inertiajs/react';
import type { Category } from '@/types/category';

interface Props {
    categories: Category[];
}

export default function Index({ categories }: Props) {
    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Categories</h1>

                <Link
                    href="/admin/categories/create"
                    className="rounded bg-black px-4 py-2 text-white"
                >
                    Create Category
                </Link>
            </div>

            <div className="mt-6 space-y-2">
                {categories.map((category) => (
                    <div key={category.id} className="flex items-center gap-4">
                        <span>{category.name}</span>

                        <Link
                            href={`/admin/categories/${category.slug}/edit`}
                            className="text-blue-600"
                        >
                            Edit
                        </Link>

                        <button
                            type="button"
                            onClick={() => {
                                if (
                                    window.confirm(`Delete "${category.name}"?`)
                                ) {
                                    router.delete(
                                        `/admin/categories/${category.slug}`,
                                    );
                                }
                            }}
                            className="text-red-600"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
