# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy project files
COPY . /app

# Install Flask inside container
RUN pip install --no-cache-dir flask

# Expose Flask port
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
