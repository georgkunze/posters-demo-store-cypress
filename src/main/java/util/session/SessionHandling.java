package util.session;

import models.Cart;
import models.Order;
import ninja.Context;
import ninja.session.SessionCookie;

/**
 * Provides methods for the session handling.
 * 
 * @author sebastianloob
 */
public class SessionHandling
{
    // The keys of session cookie values.
    private static String CART = "cart";

    private static String ORDER = "order";

    private static String USER = "user";

    /**
     * Removes the user information from the session.
     * 
     * @param context
     */
    public static void removeCustomerId(Context context)
    {
        context.getSessionCookie().remove(USER);
    }

    /**
     * Adds an order id to the session.
     * 
     * @param context
     * @param orderId
     */
    public static void setOrderId(Context context, int orderId)
    {
        context.getSessionCookie().put(ORDER, Integer.toString(orderId));
    }

    /**
     * Returns the order id of the session. Creates a new order, if no is set.
     * 
     * @param context
     * @return
     */
    public static int getOrderId(Context context)
    {
        SessionCookie cookie = context.getSessionCookie();
        // order id is not set, if the session is terminated
        if (cookie.get(ORDER) == null)
        {
            // create new order
            Order order = Order.createNewOrder();
            // set id of new order
            setOrderId(context, order.getId());
            // get cookie again
            cookie = context.getSessionCookie();
        }
        return Integer.parseInt(cookie.get(ORDER));
    }

    /**
     * Removes the order id from the session.
     * 
     * @param context
     */
    public static void removeOrderId(Context context)
    {
        context.getSessionCookie().remove(ORDER);
    }

    /**
     * Adds the cart id to the session.
     * 
     * @param context
     * @param cartId
     */
    public static void setCartId(Context context, int cartId)
    {
        context.getSessionCookie().put(CART, Integer.toString(cartId));
    }

    /**
     * Returns the cart id of the session. Creates a new cart, if no is set.
     * 
     * @param context
     * @return
     */
    public static int getCartId(Context context)
    {
        SessionCookie cookie = context.getSessionCookie();
        // create new cart, if no cart is set
        if (cookie.get(CART) == null)
        {
            Cart cart = Cart.createNewCart();
            setCartId(context, cart.getId());
            cookie = context.getSessionCookie();
        }
        return Integer.parseInt(cookie.get(CART));
    }

    /**
     * Removes the cart id from the session.
     * 
     * @param context
     */
    public static void removeCartId(Context context)
    {
        context.getSessionCookie().remove(CART);
    }

    /**
     * Returns true, if a customer is logged, otherwise false.
     * 
     * @param context
     * @return
     */
    public static boolean isCustomerLogged(Context context)
    {
        boolean isLogged = true;
        if (context.getSessionCookie().get(USER) == null)
        {
            isLogged = false;
        }
        return isLogged;
    }

    /**
     * Adds customer id to the session.
     * 
     * @param context
     * @param customerId
     */
    public static void setCustomerId(Context context, int customerId)
    {
        context.getSessionCookie().put(USER, Integer.toString(customerId));
    }

    /**
     * Returns customer id of the session, if an id is set, otherwise -1.
     * 
     * @param context
     * @return
     */
    public static int getCustomerId(Context context)
    {
        int customerId;
        String customer = context.getSessionCookie().get(USER);
        if (customer == null)
        {
            customerId = -1;
        }
        else
        {
            customerId = Integer.parseInt(customer);
        }
        return customerId;
    }
}
