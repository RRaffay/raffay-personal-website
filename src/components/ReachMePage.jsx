import React from "react";

function ReachMePage() {
  function sendEmail(e) {
    e.preventDefault();

    console.log(e.target);
    e.target.reset();
  }

  return (
    <div className="min-h-screen py-16 bg-primary" id="reach-me-page">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-montserrat font-bold text-center mb-8">Reach Me!</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              className="w-full p-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400"
              placeholder="Name and Email"
              name="name"
            />
            <textarea
              className="w-full p-3 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-400"
              rows="7"
              placeholder="Leave your message here!"
              name="message"
            />
            <div className="text-center">
              <input
                type="submit"
                className="send-button"
                value="SEND"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReachMePage;
