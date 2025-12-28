"use client";

import { useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  finish: string;
};

type CartItem = Product & {
  quantity: number;
};

const products: Product[] = [
  {
    id: "skull-keycaps",
    name: "Skull Keycaps",
    description: "Skull keycap with transparent center.",
    price: 89,
    image: "/images/skull.jpg",
    finish: "Fits most mechanical keyboards",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

export default function KeycapsSection() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const cartItems = useMemo<CartItem[]>(
    () =>
      products
        .filter((product) => cart[product.id])
        .map((product) => ({
          ...product,
          quantity: cart[product.id] ?? 0,
        })),
    [cart]
  );

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const subtotal = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] ?? 0) + 1,
    }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (quantity <= 0) {
        delete next[productId];
        return next;
      }
      next[productId] = quantity;
      return next;
    });
  };

  return (
    <section className="w-full py-20 md:py-28" id="keycaps">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 max-w-2xl space-y-3">
          <h2 className="font-bold text-3xl text-black tracking-tight md:text-4xl dark:text-white">
            Keycap Sets and Pricing
          </h2>
          <p className="text-black/70 text-base md:text-lg dark:text-white/70">
            Add your own product photos, set prices, and let customers build a
            cart in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {products.map((product) => {
              const isInCart = Boolean(cart[product.id]);

              return (
                <div
                  className="rounded-3xl bg-black/5 p-1.5 dark:bg-white/5"
                  key={product.id}
                >
                  <div className="flex h-full flex-col rounded-2xl bg-white/80 p-5 shadow-sm dark:bg-black/70">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-linear-to-br from-zinc-200 via-zinc-100 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-black">
                      <div
                        aria-label={`${product.name} photo`}
                        className="absolute inset-0 bg-cover bg-center"
                        role="img"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/5 dark:bg-white/5" />
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-black dark:text-white">
                          {product.name}
                        </h3>
                        <p className="text-sm text-black/60 dark:text-white/60">
                          {product.description}
                        </p>
                        <span className="inline-flex rounded-full bg-black/5 px-2.5 py-1 text-xs text-black/70 dark:bg-white/10 dark:text-white/70">
                          {product.finish}
                        </span>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="font-semibold text-lg text-black dark:text-white">
                          {formatCurrency(product.price)}
                        </div>
                        <span className="text-xs text-black/50 dark:text-white/50">
                          per set
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center gap-3">
                      <button
                        className="inline-flex flex-1 items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                        onClick={() =>
                          isInCart
                            ? updateQuantity(product.id, 0)
                            : addToCart(product.id)
                        }
                        type="button"
                      >
                        {isInCart ? "Remove from cart" : "Add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="rounded-3xl bg-black/5 p-1.5 dark:bg-white/5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-white/80 p-5 shadow-sm dark:bg-black/70">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-black dark:text-white">
                  Cart
                </h3>
                <span className="text-sm text-black/60 dark:text-white/60">
                  {itemCount} item{itemCount === 1 ? "" : "s"}
                </span>
              </div>

              <div className="mt-4 space-y-4">
                {cartItems.length === 0 ? (
                  <p className="text-sm text-black/60 dark:text-white/60">
                    Your cart is empty. Add a keycap set to get started.
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      className="flex items-center justify-between gap-3"
                      key={item.id}
                    >
                      <div>
                        <div className="font-medium text-black dark:text-white">
                          {item.name}
                        </div>
                        <div className="text-xs text-black/50 dark:text-white/50">
                          {formatCurrency(item.price)} each
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          aria-label={`Decrease quantity for ${item.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 text-black/70 transition hover:bg-black/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          type="button"
                        >
                          -
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm text-black dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          aria-label={`Increase quantity for ${item.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 text-black/70 transition hover:bg-black/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/10"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          type="button"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-sm font-semibold text-black dark:text-white">
                        {formatCurrency(item.price * item.quantity)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 border-black/10 border-t pt-4 dark:border-white/10">
                <div className="flex items-center justify-between text-sm text-black/60 dark:text-white/60">
                  <span>Subtotal</span>
                  <span className="font-semibold text-black dark:text-white">
                    {formatCurrency(subtotal)}
                  </span>
                </div>
                <button
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-black/30 dark:bg-white dark:text-black dark:disabled:bg-white/40"
                  disabled={cartItems.length === 0}
                  type="button"
                >
                  Checkout
                </button>
                <p className="mt-2 text-xs text-black/50 dark:text-white/50">
                  Taxes and shipping calculated at checkout.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
